#AD_CHAT


Progetto Chat in NodeJS

## BASIC SETUP
Tools necessari

*	Creare un account su OpenShift
*	Configuarare l'account installando **Ruby**, **Git**, **rhc**
*	Scarica e installa NodeJS


## Host your Node.js applications on OpenShift
Create a Node.js application. This example will produce an application named nodeapp:

	rhc app create nodeapp nodejs --from-code=git://github.com/andr3a87/AD_CHAT.git
You should be able to access your application at:

	http://nodeapp-$yournamespace.rhcloud.com

## Install Redis to Openshift

	rhc cartridge add postgresql-9.2 -a (you app name)
	
	rhc cartridge add "http://cartreflect-claytondev.rhcloud.com/reflect?github=smarterclayton/openshift-redis-cart" -a (your app name)

## Testing Redis
	

	rhc ssh (your app name)

Per controllare le varibili di ambiente
	
	env | grep REDIS





