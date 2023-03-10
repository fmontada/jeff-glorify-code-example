# jeff-code-example


## Omaze auth0

`/auth0`

I worked on this project for over six months. The goal of this project was to replace the Shopify IDP with Auth0 IDP
so we could own the user data. Instead of users login into Shopify, users could log in to our own IDP services, and
owning the Authentication/Authorization was what we considered as the first step to start building User Profile
Feature to help with the business retention. I wrote 90% of the `js/src/*.js`. Those are Auth0 Rules; basically, 
javascript funcs that allow us to customize the login flows/data, base in our use case. For this project, 
I also helped to build Shopify-Theme components that were integrated with the Auth0 Rules mentioned above

## Omaze cl-frontend
This was my last project at Omaze. I worked as POD lead on this project, so I help to design/architected
the project, and I also played the role of an individual contributor. An example of my contribution
was this Strapi Component `cl-frontend/components/Strapi/strapi.tsx`. It is a custom component that allowed us to connect 
Strapi CMS with [Plasmic](https://www.plasmic.app/) a UI builder tool we used to create static pages. I also 
implemented this `cl-frontend/components/Auth0/Auth0Provider.tsx` to integrate `Auth0` 
into our new frontend stack. 

## E-commerce backend service
`/e-com-srv`

This is a backend Graphql server implementation, a personal project I worked on like a year ago. 
It is written in Golang, I architected/designed the project and wrote more than 50% of the code

![alt text](https://github.com/fmontada/jeff-glorify-code-example/blob/main/diagram.png "Architecture Diagram")

## Libs
This are libs that I built that can be used in any project for, logger, config, and stats 

##### `glog` (Logger)
##### `srv-utils` (Load config file into an object)
##### `gstat` (Datadog and Newrelic instrumentation)

## Infra
For the E-commerce project mentioned above, it was deploy using AWS serverless architecture, 
Lambda, API Gateway, Cognito, S3 so this `infra` project is a `tf` project to provisioning all the AWS 
the resources, I wrote 100% of this project.

`/infra`

