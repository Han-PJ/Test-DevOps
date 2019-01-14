# Assignment

Assignment for DevOps by Han. How to use script to create docker image and deploy to Kubernetes using Jenkins pipeline

## Prerequisites

-   Install the latest versions of Docker, kubeadm, Kubectl and Jenkins
    
-   Clone this repository
    

**How to use**

1.  Add **new credentials** for Docker Hub with **username/password**
![enter image description here](https://github.com/aihan/Assignment1/blob/master/screenshots/jen_add_cre.PNG)
2. Create new item. Provide a name for your new item (e.g. **Assignment-node-app**) and select **Pipeline**
![enter image description here](https://github.com/aihan/Assignment1/blob/master/screenshots/jen_pipe_cre.PNG)
3. Click **This project is parameterized** and add 2 String parameter
	- Name : **docker_repository**
	   Default Value : e.g. aihan/node-app
	- Name : **tag_name**
	   Default Value : e.g. latest	  ![enter image description here](https://github.com/aihan/Assignment1/blob/master/screenshots/jen_add_param.PNG)
4. Click **Pipeline** tab
	- Definition select **Pipeline script from SCM**
	- SCM select **Git** and Repository URL :[https://github.com/aihan/Assignment1.git](https://github.com/aihan/Assignment1.git)
	- Script Path : **pipeline/Jenkinfile**
![enter image description here](https://github.com/aihan/Assignment1/blob/master/screenshots/jen_pipe_scm.PNG)
5. Click **Build with Parameters**
![enter image description here](https://github.com/aihan/Assignment1/blob/master/screenshots/jen_build_with_param.PNG)
6. Check required parameter and Click **Build**
![enter image description here](https://github.com/aihan/Assignment1/blob/master/screenshots/jen_build_default_param.PNG)
7. If the job status is success, all stage color would be green.
![enter image description here](https://github.com/aihan/Assignment1/blob/master/screenshots/jen_build_finish.PNG)
9. Click **Console Output** to see the full output from the Pipeline run. The following output shows a successful run of your Pipeline.
![enter image description here](https://github.com/aihan/Assignment1/blob/master/screenshots/jen_console.png)
10. Open **Kubernetes dashboard** you will see **node-app** in deployment , pod and service with relate to node-app from jenkins pipeline deployment
![enter image description here](https://github.com/aihan/Assignment1/blob/master/screenshots/kube_node_result.PNG)
11. Open Browser enter endpoint service  URL you will got response
![enter image description here](https://github.com/aihan/Assignment1/blob/master/screenshots/node_result.PNG)

