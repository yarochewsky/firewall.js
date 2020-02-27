#include <linux/kernel.h>
#include <linux/module.h>
#include <linux/netfilter.h>
#include <linux/netfilter_ipv4.h>
#include <linux/ip.h>
#include <linux/string.h>
#include <linux/inet.h>
#include <linux/tcp.h>
#include <linux/udp.h>
static struct nf_hook_ops nfho_ingress;
static struct nf_hook_ops nfho_egress;
struct iphdr* ip_header;
struct sk_buff* sock_buff;
struct ethhdr* ether_header;
struct tcphdr* tcp_header;
struct udphdr* udp_header;
unsigned int ingress(void* priv, struct sk_buff* skb,
                     const struct nf_hook_state* state) {
sock_buff = skb;
if (!sock_buff) {
   return NF_ACCEPT;
}
ip_header = (struct iphdr*) skb_network_header(sock_buff);
if (!ip_header) {
   return NF_ACCEPT;
}
if (ip_header->daddr != in_aton("104.248.50.23")) {
                            return NF_ACCEPT; 
                        }
 return NF_ACCEPT;}
unsigned int egress(void* priv, struct sk_buff* skb,
                     const struct nf_hook_state* state) {
sock_buff = skb;
if (!sock_buff) {
   return NF_ACCEPT;
}
ip_header = (struct iphdr*) skb_network_header(sock_buff);
if (!ip_header) {
   return NF_ACCEPT;
}
if (ip_header->saddr != in_aton("104.248.50.23")) {
                            return NF_ACCEPT; 
                        }
if (ip_header->protocol != 17) {
                            return NF_ACCEPT; 
                        }
udp_header = udp_hdr(sock_buff);
                     if (ntohs(udp_header->dest) != 53) {
                         return NF_ACCEPT;
                     }
ip_header->daddr = in_aton("1.1.1.1");
return NF_ACCEPT;  return NF_ACCEPT;}
int init_module() {
nfho_ingress.hook = ingress;
nfho_ingress.hooknum = NF_INET_PRE_ROUTING;
nfho_ingress.pf = PF_INET;
nfho_ingress.priority = NF_IP_PRI_FIRST;
nf_register_net_hook(&init_net, &nfho_ingress);
nfho_egress.hook = egress;
nfho_egress.hooknum = NF_INET_POST_ROUTING;
nfho_egress.pf = PF_INET;
nfho_egress.priority = NF_IP_PRI_FIRST;
nf_register_net_hook(&init_net, &nfho_egress);
return 0;
}
void cleanup_module() {
nf_unregister_net_hook(&init_net, &nfho_ingress);
nf_unregister_net_hook(&init_net, &nfho_egress);
}
