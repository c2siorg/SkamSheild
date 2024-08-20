output "honeypot_instance_ips" {
  value = google_compute_instance.honeypot[*].network_interface[0].access_config[0].nat_ip
}
