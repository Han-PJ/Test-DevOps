# Assignment

Assignment for DevOps by Han. How to use script to create docker image and deploy to Kubernetes using Jenkins pipeline

## Prerequisites

-   Install the latest versions of Docker, kubeadm, Kubectl and Jenkins
    
-   Clone this repository
    

**How to use**

1.  Add new credentials for Docker Hub with username/password
![enter image description here](https://github.com/aihan/Assignment1/blob/master/screenshots/jen_add_cre.PNG)
2. Create new item Enter an Item name and choose Pipeline
![enter image description here](https://github.com/aihan/Assignment1/blob/master/screenshots/jen_pipe_cre.PNG)
3. Click Pipeline tap
	- Definition select Pipeline script from SCM
	- SCM select Git and fill [https://github.com/aihan/Assignment1.git](https://github.com/aihan/Assignment1.git)
	- Script Path enter: pipeline/Jenkinfile
![enter image description here](https://github.com/aihan/Assignment1/blob/master/screenshots/jen_pipe_scm.PNG)
4. Click Build Now wait until finish if success it will show green stage
![enter image description here](https://github.com/aihan/Assignment1/blob/master/screenshots/jen_build_finish.PNG)
![enter image description here](https://github.com/aihan/Assignment1/blob/master/screenshots/jen_console.png)
5. Open Kubernetes dashboard you will see node-app in deployment , pod and service with relate to node-app from jenkins pipeline deployment
![enter image description here](https://github.com/aihan/Assignment1/blob/master/screenshots/kube_node_result.PNG)
6. Open Browser and open url to endpoint port Service you will got response
![enter image description here](https://github.com/aihan/Assignment1/blob/master/screenshots/node_result.PNG)
