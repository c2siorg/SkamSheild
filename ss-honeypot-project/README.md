# Skam Shiled Honeypot Project

## Overview

The Skam Shiled Honeypot aims to deploy and manage honeypots across multiple Australian cloud vendors, store collected data in a storage bucket, and analyze the effectiveness of different honeypot applications. This project leverages Terraform for cloud infrastructure deployment and Docker for running honeypots.

## Project Structure

- `terraform/`: Contains Terraform configuration files for deploying cloud infrastructure.
- `honeypots/`: Contains Dockerfiles and configurations for different honeypot applications.
- `scripts/`: Includes scripts for deploying infrastructure and monitoring honeypots.
- `data/`: Placeholder for storing collected data.
- `.gitignore`: Git ignore file to exclude unnecessary files.
- `README.md`: Project documentation.
- `setup.md`: Additional setup instructions.

## Prerequisites

- [Terraform](https://www.terraform.io/downloads) - Infrastructure as Code tool.
- [Docker](https://docs.docker.com/get-docker/) - Containerization platform.
- Access to a cloud provider account (e.g., Google Cloud Platform).

## Setup

1. **Configure Terraform Provider**

   Edit `terraform/provider.tf` to include your cloud provider credentials and project details.

2. **Modify Terraform Variables**

   Update `terraform/variables.tf` with your project ID and desired region.

3. **Deploy Cloud Infrastructure**

   Navigate to the Terraform directory and run the deployment script:

   ```bash
   cd terraform
   ./deploy.sh
   ```

4. **Build and Deploy Honeypots**

   - Navigate to the honeypot directory and build the Docker image:

     ```bash
     cd honeypots/honeypot1
     docker build -t honeypot1 .
     ```

   - Run the honeypot container:
     ```bash
     docker run -d -p 8080:8080 honeypot1
     ```

5. **Monitor Honeypots**

   Use the monitoring script to check the logs from the deployed honeypots:

   ```bash
   cd scripts
   ./monitor.sh
   ```

## How It Works

1. **Infrastructure Deployment**: Terraform provisions virtual machines or instances on cloud providers. The instances are configured to run honeypot applications.

2. **Honeypot Deployment**: Honeypot applications are packaged in Docker containers and deployed on the provisioned instances.

3. **Data Collection**: Honeypots collect data on malicious activities, which can be analyzed later.

4. **Monitoring**: The monitoring script provides real-time logs and status updates of the running honeypots.

## Additional Resources

- [Terraform Documentation](https://www.terraform.io/docs)
- [Docker Documentation](https://docs.docker.com/)
- [Awesome Honeypots](https://github.com/paralax/awesome-honeypots)
- [APNIC Community Honeynet Project](https://apnic.foundation/projects/cybersecurity-honeynet-threat-sharing/)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Feel free to open issues or submit pull requests if you have suggestions or improvements.

## Acknowledgments

Special thanks to the maintainers of the awesome honeypots list and the APNIC community for their resources and inspiration.
