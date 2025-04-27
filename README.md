# 🚀 Full Stack CI/CD Pipeline

This project demonstrates a complete CI/CD pipeline for a full stack application, using:

- **Ansible** to provision the server
- **Docker** to run the backend API
- **Cloudflare Pages** to deploy the frontend
- **GitHub Actions** as the CI/CD automation tool

---


## 🛠️ Stack Overview

| Layer           | Technology Stack                              |
|-----------------|-----------------------------------------------|
| Backend         | FastAPI, Docker, Mongodb, celery worker, broker redis                                                              |
| Provisioning    | Ansible                                        |
| CI/CD           | GitHub Actions                                 |
| Deployment      | Cloudflare Pages (Frontend)                    |
| Version Control | GitHub                                         |

## 🛠️ Setup Instructions

### 1. 🔧 Provisioning with Ansible

#### Inventory file: `ansible/inventory.ini`

```ini
[web]
your-server-ip ansible_user=root ansible_ssh_private_key_file=~/.ssh/your_key  

##### Running the Application
Run ansible using terminal, Ansible will automaticaly start the app in your webservers/vms:
> ansible-playbook -i ansible/inventory.ini ansible/ansible-playbook.yaml

###### Enter Cloudflare credentials
You need to enter you cloudflare credentials to deploy frontend to go live. ADD your cloudflare account ID and Cloudlfare API token in your repository secrets inside your gitub account.