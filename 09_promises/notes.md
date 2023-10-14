# FETCH API
fetch() api is the powerful api which handles all the work of the XHR (XML Http Request), it basically returns a promise on which we can perform the basic .then, .catch and .finally operations. It completes the web request as if a browser is integrated into the node environment. At first the fetch API was just the feature of the browser.

## Introduction and Working
Fetch API is introduced and is integrated in JavaScript in Feb, 2022. The Working of Fetch API is as follows:

Basically to start off with, we can say that there are 2 parts of Fetch API, which are: Part 1 as data and part 2 as environment such as browser or the node environment. 

Part 1 : The data is basically responsible for the response that we'll get from the fetch API and is undefined until we get any response from the request that we made already. 

Part 2: The Environment is responsible for making the network or web request which will give us the result as a success or a failed request. The request which is made can also result in the server error or any other status but it will be counted as the successfully executed network request and will result in a success request. It will only result in a failure if there is network error or permission error or any similar kind of error.

Part 1 again: The data is undefined till there is no response from the environment side but there are 2 functions which will handle the success and failure responses differently. The 2 functions: OnFulfilled() and OnRejection() will get their callbacks on succeed and failure of request respectively. There will be execution of only one function of these 2. These functions then are responsible for filling up the information in data. Once the information is filled, it will transfer to the response through which we will get to know what the response of our request is.