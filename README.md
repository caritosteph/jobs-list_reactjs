Welcome!
===================


This is your frontend challenge as part of the zenjob interview process. This repository should contain all necessary information to solve the tasks. As part of your challenge you will develop a frontend **single page application** in a **javascript** framework / library set of your choice. 

----------


Background
-------------
Zenjob helps business customers to staff job positions rapidly with qualified employees. Based on the description (what, when, where, who) of the companies we are creating job offers for our workers. A worker has the possibility to accept or decline an offer. If he accepts, we match them to job.  If he declines, we continue to offer the job to other worker.

Zenjob provides a mobile app to workers on Android and iOS. After login workers are able to see their offers, jobs and tasks. 

Challenge Overview
-------------

We want you to create a similar application in javascript with reduced functionality set. This means in detail:

 - simple login
 - list of offers
 - a detailed view of an offer
	 - possibility to decline an offer with a reason

Therefore we are granting you access to our API with the already created user. Please check your mail.

Important: We are securing the API calls with a JWT. No call except the login is authorized without a valid JWT (later more).  


API
-------------

- *baseUrl* (included in the mail): proceeding to all API calls
- *user* (included in the mail): only valid user for login
- *password* (included in the mail): password of the user
- *token*: received in response body after successful login request
- *decline_reason*: the **name** of an entry of the decline reasons list

----------

- login - request
	 - endpoint: {baseURL}/api/employee/v1/auth
	 - HTTP-method: POST
	 - HTTP-header: 
		 - Content-Type: "application/json"
	 - body (json):
		 - username: "{user}" 
		 - password: "{password}"

- login - response - success
	 - status: 200 OK
	 - body (json): (login-200-response.json)

----------

 - offers - request
	 - endpoint: /api/employee/v1/offers?offset=0
	 - HTTP-method: GET
	 - HTTP-header
		 - Authorization: "Bearer {token}"
	
- offers - response - success
	- status: 200 OK
	- body (json): (offers-200-response.json)

----------

 - offer - request
	 - endpoint: /api/employee/v1/offers/{id}
	 - HTTP-method: GET
	 - HTTP-header
		 - Authorization: "Bearer {token}"
	
 - offer - response - success
	- status: 200 OK
	- body (json): (offer-200-response.json)

----------

 - decline reasons (DATA) - request
	 - endpoint: /api/employee/v1/data/declineReasons
	 - HTTP-method: GET
	 - HTTP-header
		 - Authorization: "Bearer {token}"

	

 - decline  reasons (DATA) - response - success
	- status: 200 OK
	- body (json): (declineReasons-200-response.json)

----------

 - decline offer - request
	 - endpoint: /api/employee/v1/offers/{id}
	 - HTTP-method: DELETE
	 - HTTP-header
		 - Authorization: "Bearer {token}"
		 - Content-Type: "application/json"
	 - body (json):
		 - reason: {decline_reason}
		 - reasonComment: string
	
 - decline offer - response - success
	- status: 200 OK
	- body (json): (decline-offer-200-response.json)


Tasks
-------------

After this wall of text, hopefully you are still super excited about the tasks details. We grouped them in two categories: general tasks and coding tasks. Both parts are important ;-) 

General:

 - Estimate the time you need for solving each single task and submit it before you start

Coding:

notes: 
 - The entrypoint of the application is the login view.
 - Use the designs as guidelines - no pixel perfect views are needed

 - login (see screens/login)
	 - create a login view with a form for login with username and password
		 - on successful login redirect to the list offers view 
 - list offers (see screens/offers)
	 - get offers list from api
	 - render each offer as a card with details you can find in the designs
	 - on click 'ZEIG MIR DETAILS': go to offer details view
	 - on click 'NICHT INTERESSIERT': decline offer with reason
 - show offer (see screens/offer)
	 - get offer details from api
	 - render a detailed offer view with details you can find in the designs
 - decline offer with reason (see screens/decline)
	 - get decline reasons from api
	 - render decline reason wizard 
		 - render step 1: decline/decline_wizard_step-1.png
		 - on click 'Job gefällt mir nicht' - step 2: decline/decline_wizard_step-2.png
		 - on click 'Sonstiges' - step 2:  decline/decline_wizard_step-2 (2)

Make you comfortable: after reading all of this you may have questions. Think about it and try to solve it on your own. If there is a major fuckup (api is wrong, information missing etc.) contact your challenge contact person directly. If you are struggling with solving a task: write it down in a structured and understandable way and submit it to your challenge contact person.

