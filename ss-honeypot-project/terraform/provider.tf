provider "google" {
  credentials = file("<path-to-your-service-account-json>")
  project     = "<your-project-id>"
  region      = "australia-southeast1"
}

resource "google_compute_instance" "honeypot" {
  count        = 2
  name         = "honeypot-${count.index}"
  machine_type = "n1-standard-1"
  zone         = "australia-southeast1-b"

  boot_disk {
    initialize_params {
      image = "ubuntu-2004-focal-v20210825"
    }
  }

  network_interface {
    network = "default"
    access_config {}
  }

  tags = ["honeypot"]

  metadata_startup_script = file("${path.module}/scripts/deploy.sh")

  labels = {
    environment = "production"
  }
}
