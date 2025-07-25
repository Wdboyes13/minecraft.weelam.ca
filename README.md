# Code for [https://minecraft.weelam.ca](https://minecraft.weelam.ca)  

## Directory Structure
- Server.js  -- This is the main server javascript file. Run by systemd
- mcweb.service -- The systemd config file
- serverstat.sh -- The file thats executed to get server status. Run by server.js
- www/       -- Contains the actual HTML/CSS/JS for the website
- www/index.html - Homepage
- www/info/index.html - Server info
- www/info/mods/index.html - Mods page
- www/info/mods/suggestions/index.html - Mod suggestions rules
- www/rules/index.html - Rules page
