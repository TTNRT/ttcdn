# TTCDN
Source code for parts of our CDN website

## Info

- Built on NodeJS
- Uses ExpressJS for sending file data
- Zero website layouts
- Uses only JSON-view (for the root page)

## Deployment
There are some ways you can deploy the CDN website to your server. You may run with or without the included Docker files. You can also run it using systemd (if using Linux), but we recommend using the Docker method since it's more easier and doesn't require too much configuration.

### Docker method
You may notice that there is a Docker compose file and Dockerfile. The compose file is there if you don't want to run the server using the docker commands, but you may decide on whatever method you want to kickstart the server to operating.

#### Compose method
First off, you should build the image using the `docker build` command. To make things easier, we have included a image building script for an easier and automated building process. This script also can rebuild the image if you make a change to the core files.

Run the script and then run the compose command below.

```bash
# If not on the root user
sudo docker compose up -d

# If on the root user
docker compose up -d
```

You should see the server running on the speified port it's running on. You may change it by using the compose file or the environment file.

#### Command line method
As stated above, you should have the image built and ready to go. Since this is the command-line method, you have to set some parameters so that the container works well. If you need more information on them, see the Docker documentation [here](https://docs.docker.com/). The command below is only an example, so you may change it to whatever you want.

```bash
# If not on the root user
sudo docker run -d -p 8080:8080 ttcdn:latest

# If on the root user
docker run -d -p 8080:8080 ttcdn:latest
```

As always, you should see the server running on the port it's running on. If the port you've selected is in use, you may change it to one that is not in use. Remember to look at the documentation if you want a bit more information on the CLI or if you don't understand it a bit.

### Standalone method
Running the server standalone is a bit of a process, and requires some configuration in order to operate. You should have the basic root permissions to do this method since we're adding a system service to the Linux system. If you do not have any of those permissions, look up on how to get them, such as using sudo or logging in using the root user.

#### Systemd method
There is a included service file inside the repository filed with some configuration that you should change. Some information that you should change is below.

1. The port environment line
2. The path to where the server files are located
3. The name and description of the service
4. The user and group that will run the server

If you need more information on how the systemd service file works, look up on the internet to see that. Once you have made your changes to the file, you're ready to run the service! Copy the service file to the systemd folder. Again, you should have the needed root permisions (if using the sudo command) or logged in to the root account in order to copy the file. Run the command below to do that.

```bash
# If not on the root user
sudo cp ttcdn.service /etc/systemd/system

# If on the root user
cp ttcdn.service /etc/systemd/system
```

Once you have copied it, you should reload the systemd daemon. This is so that it knows we added a new service and that we don't have to restart once we made our changes. Run the command below to do this.

```bash
# If not on the root user
sudo systemctl daemon-reload

# If on the root user
systemctl enable daemon-reload
```

Once done, you should enable the service so that it can run when the system starts up. Once again, this command requires root permisions. The command below will show how to do that.

```bash
# If not on the root user
sudo systemctl enable --now ttcdn.service

# If on the root user
systemctl enable --now ttcdn.service
```

> [!NOTE]
> For context on the command here, the `--now` parameter is to run the service after it's enabled, so that we don't have to run the `start` command afterwards. This is only to make things more easier with how we can run it.

You should see the server running by going to the server website and the port number it's hosting on.

## Getting help
If you need any help with getting it working, you may give us an email, or by asking on our Discord server. Make sure you describe what your problem is so that we can understand it more.