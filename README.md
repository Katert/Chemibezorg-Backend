# Chemibezorg Back-end
For a job interview, I had to write a simple web application (both front- and back-end) for a fictional company called Chemibezorg.
This company delivers chemical products. An employee who plans shipments, should receive a warning when specific products are combined in the same shipment, 
because of various dangers.
This back-end has endpoints for both selecting and inserting data from/to the database.

# TODO

- Implement checking conditions for forbidden combinations at /shipment/save endpoint.
- Create endpoint for user login and define logic for login requests.

# Stack
This back-end is built with NodeJS / Express, and uses the mysql package to connect to a MySQL database.

# Front-end
https://github.com/Katert/Chemibezorg-frontend
