# Portfolio Website

This document provides instructions on how to run the portfolio website on another machine and how to host it on AWS.

## Running the Project on Another Machine

To run the project locally, follow these steps:

### 1. Clone the Repository

Clone the repository to your local machine using the following command:

---- git clone https://github.com/Zatch07/portfolio-website.git


Navigate into the project directory:

---- cd portfolio-website


### 2. Open the Project

Since this is a static website, you can simply open the `index.html` file directly in a web browser to view the project.

Alternatively, for a more realistic environment similar to a web server, you can use a simple HTTP server. If you have Python installed, you can start a simple HTTP server with the following command:

For Python 3.x:

---- python -m http.server


Then, open your web browser and go to `http://localhost:8000` to view the project.

## Hosting the Project on AWS

To host this static website on AWS, you can use Amazon S3 and optionally configure Amazon CloudFront for content delivery. Here's how:

### 1. Create an S3 Bucket

- Log in to your AWS Management Console and navigate to the S3 service.
- Create a new bucket with a unique name and disable 'Block all public access' settings. Acknowledge that the bucket will be publicly accessible.

### 2. Upload Your Website

- Upload the contents of your project (HTML, CSS, JavaScript, and image files) to the newly created S3 bucket.
- After uploading, mark the `index.html` file as publicly accessible.

### 3. Enable Static Website Hosting

- In your bucket properties, find the "Static website hosting" option and enable it.
- Set `index.html` as both the index and error documents.

### 4. Test Your Website

- S3 will provide you with a Bucket website endpoint URL. Use this URL to access your website in a web browser.

### 5. (Optional) Configure a Custom Domain with Route 53

- If you want to use a custom domain, you can configure it using AWS Route 53 and point it to your S3 bucket.

### 6. (Optional) Set Up CloudFront for Faster Content Delivery

- To improve load times globally, create a CloudFront distribution.
- Point the distribution to your S3 bucket.
- Update the distribution settings to use your custom domain name, if applicable.

### 7. Update DNS Records

- If you're using a custom domain with CloudFront, update your DNS records in Route 53 or your DNS provider to point to the CloudFront distribution.

For more detailed instructions, especially for AWS services, refer to the official AWS documentation.
