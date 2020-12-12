# Software-Engineering-Internship
Question Number-02
web application to show the New York Times best-selling books list

	A)Procedure for Project

	1.Use 'create-react-app' to build your React app.
	2. Install 'npm install' downloads a package and it's dependencies. 
	   npm install can be run with or without arguments. When run without arguments, 'npm install' downloads dependencies defined in a package. 
	   json file and generates a node_modules folder with the installed modules
	3. Use 'npm start' to open server on web browser


	B)
	1)Make API request:  To handle making an API request, we enclose the fetching action in a function which is called once we need to make an API request. 
			     Create a fetchData function in the App() component and use Axios to fetch the required data from the API endpoint.we created a function fetchData which makes a get request to fetch the Game of Thrones books.
			     Once the request is completed, we used the setBooks method to assign the data to books.

	2)Render Returned Data.

	
	