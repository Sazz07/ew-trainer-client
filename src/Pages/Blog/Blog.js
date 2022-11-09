import React from 'react';
import useTitle from '../../hooks/useTitle';

const Blog = () => {
    useTitle('Blog');
    return (
        <div className='my-20'>
            <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">Blog Section</p>
                <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl text-violet-600">Frequently Asked Questions</h2>
                <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
                    <div>
                        <h3 className="font-semibold text-lg">1. Difference between SQL and NoSQL?</h3>
                        <p className="mt-1 text-gray-600">The five critical differences between SQL vs NoSQL are:
                            <br /> <br />
                            1. SQL databases are relational, NoSQL databases are non-relational.
                            <br /> <br />
                            2. SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.
                            <br /> <br />
                            3. SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.
                            <br /> <br />
                            4. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.
                            <br /> <br />
                            5. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg">2. What is JWT, and how does it work?</h3>
                        <p className="mt-1 text-gray-600">JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed.
                            <br /> <br />
                            Here are some scenarios where JSON Web Tokens are useful:
                            <br /> <br />
                            Authorization: This is the most common scenario for using JWT. Once the user is logged in, each subsequent request will include the JWT, allowing the user to access routes, services, and resources that are permitted with that token. Single Sign On is a feature that widely uses JWT nowadays, because of its small overhead and its ability to be easily used across different domains.
                            <br /> <br />
                            Information Exchange: JSON Web Tokens are a good way of securely transmitting information between parties. Because JWTs can be signed—for example, using public/private key pairs—you can be sure the senders are who they say they are. Additionally, as the signature is calculated using the header and the payload, you can also verify that the content hasn't been tampered with.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg">3. What is the difference between javascript and NodeJS?</h3>
                        <p className="mt-1 text-gray-600">1. Javascript is a programming language that is used for writing scripts on the website.And NodeJS is a Javascript runtime environment.
                            <br /> <br />
                            2. Javascript can only be run in the browsers.And We can run Javascript outside the browser with the help of NodeJS.
                            <br /> <br />
                            3. Js most commonly used on client-side servers. Node Js mainly popular on the server-side.
                            <br /> <br />
                            4. Js made for creating network-centric apps. NodeJs  made for real-time data-intensive apps that run on multiple platforms.
                            <br /> <br />
                            5. It's a new release of the ECMA script that works on the C++-based V8 engine. In NodeJs C++, C, and JavaScript are used.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg">4. How does NodeJS handle multiple requests at the same time?</h3>
                        <p className="mt-1 text-gray-600">NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.
                            <br /> <br />
                            If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallel using the NodeJS cluster module or worker_threads module.

                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;