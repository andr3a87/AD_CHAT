AD_CHAT
=

Progetto Chat in NodeJS

# BASIC SETUP
Tools necessari

*	Creare un account su OpenShift
*	Configuarare l'account installando **Ruby**, **Git**, **rhc**
*	Scarica e installa NodeJS


# Host your Node.js applications on OpenShift
Create a Node.js application. This example will produce an application named nodeapp:

	rhc app create nodeapp nodejs --from-code=git://github.com/andr3a87/AD_CHAT.git
You should be able to access your application at:

	http://nodeapp-$yournamespace.rhcloud.com