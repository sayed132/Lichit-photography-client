import React from 'react';

const CourseBlog = () => {
    return (
        <div className="dark:bg-gray-800 dark:text-gray-100">
            <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-lg dark:bg-gray-900">
                <div className="flex items-center justify-between">
                    <span className="text-sm dark:text-gray-400">Jun 1, 2020</span>
                    <p className="px-2 py-1 font-bold rounded dark:bg-violet-400 dark:text-gray-900">SQL vs NoSQL</p>
                </div>
                <div className="mt-3">
                    <pa className="text-2xl font-bold hover:underline">Difference between SQL and NoSQL</pa>
                    <p className="mt-2">SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL. <a className='text-blue-600' href="https://www.talend.com/resources/sql-vs-nosql/#:~:text=SQL%20is%20the%20programming%20language,generally%20do%20not%20use%20SQL.">...Read more</a></p>
                </div>
                <div className="flex items-center justify-between mt-4">

                    <div>
                        <p className="flex items-center">
                            <img src="https://scontent.fdac8-1.fna.fbcdn.net/v/t39.30808-6/258727252_1247222739124851_3132726739531733063_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeE5Pa45IAf2uRzW1H00WncErasGUaTh1uGtqwZRpOHW4fUtUAh3fHJkzmZxLrYf9Jb2KYekCnWKubE-L_qipPqN&_nc_ohc=8cCHabY7JikAX-HeQ6K&_nc_ht=scontent.fdac8-1.fna&oh=00_AfDPkuIE3sVxjG_whdrcbEOYBcByciCgP-nwNy25uJ7yAA&oe=6371F36A" alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500" />
                            <span className="hover:underline dark:text-gray-400">Rafsan Sayed</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="container max-w-4xl px-10 py-6 my-6 mx-auto rounded-lg shadow-lg dark:bg-gray-900">
                <div className="flex items-center justify-between">
                    <span className="text-sm dark:text-gray-400">Jun 1, 2020</span>
                    <p className="px-2 py-1 font-bold rounded dark:bg-violet-400 dark:text-gray-900">JWT OR JSON WEB TOKEN</p>
                </div>
                <div className="mt-3">
                    <pa className="text-2xl font-bold hover:underline">Why we using firebase? </pa>
                    <p className="mt-2">JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.</p>
                </div>
                <div className="mt-3">
                    <pa className="text-2xl font-bold hover:underline">how does it work? </pa>
                    <ul className="mt-2">JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.
                        <p className='mt-6'>
                            A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.
                        </p>
                        <p className='mt-6'>
                            <strong> Once decoded, you will get two JSON strings:
                            </strong> <br />
                            <ol>
                                <li><>1. The header and the payload.</></li>
                                <li><>2. The signature.</></li>
                            </ol>
                            The JOSE (JSON Object Signing and Encryption) header contains the type of token — JWT in this case — and the signing algorithm. <br /><br />

                            The payload contains the claims. This is displayed as a JSON string, usually containing no more than a dozen fields to keep the JWT compact. This information is typically used by the server to verify that the user has permission to perform the action they are requesting. <br /><br />

                            There are no mandatory claims for a JWT, but overlaying standards may make claims mandatory. For example, when using JWT as bearer access token under OAuth2.0, iss, sub, aud, and exp must be present. some are more common than others. <br /><br />

                            The signature ensures that the token hasn’t been altered. The party that creates the JWT signs the header and payload with a secret that is known to both the issuer and receiver, or with a private key known only to the sender. When the token is used, the receiving party verifies that the header and payload match the signature.
                        </p>
                    </ul>
                </div>
                <div className="flex items-center justify-between mt-4">

                    <div>
                        <p className="flex items-center">
                            <img src="https://scontent.fdac8-1.fna.fbcdn.net/v/t39.30808-6/258727252_1247222739124851_3132726739531733063_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeE5Pa45IAf2uRzW1H00WncErasGUaTh1uGtqwZRpOHW4fUtUAh3fHJkzmZxLrYf9Jb2KYekCnWKubE-L_qipPqN&_nc_ohc=8cCHabY7JikAX-HeQ6K&_nc_ht=scontent.fdac8-1.fna&oh=00_AfDPkuIE3sVxjG_whdrcbEOYBcByciCgP-nwNy25uJ7yAA&oe=6371F36A" alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500" />
                            <span className="hover:underline dark:text-gray-400">Rafsan Sayed</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="container max-w-4xl px-10 py-6 my-6 mx-auto rounded-lg shadow-lg dark:bg-gray-900">
                <div className="flex items-center justify-between">
                    <span className="text-sm dark:text-gray-400">Jun 1, 2020</span>
                    <p className="px-2 py-1 font-bold rounded dark:bg-violet-400 dark:text-gray-900">javascript and node.js</p>
                </div>
                <div className="mt-3">
                    <pa className="text-2xl font-bold hover:underline">What is the difference between javascript and NodeJS? </pa>
                    <p className="mt-2">JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language. <a className='text-blue-600' href="https://www.geeksforgeeks.org/difference-between-node-js-and-javascript/">...Read more</a></p>
                </div>

                <div className="flex items-center justify-between mt-4">

                    <div>
                        <p className="flex items-center">
                            <img src="https://scontent.fdac8-1.fna.fbcdn.net/v/t39.30808-6/258727252_1247222739124851_3132726739531733063_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeE5Pa45IAf2uRzW1H00WncErasGUaTh1uGtqwZRpOHW4fUtUAh3fHJkzmZxLrYf9Jb2KYekCnWKubE-L_qipPqN&_nc_ohc=8cCHabY7JikAX-HeQ6K&_nc_ht=scontent.fdac8-1.fna&oh=00_AfDPkuIE3sVxjG_whdrcbEOYBcByciCgP-nwNy25uJ7yAA&oe=6371F36A" alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500" />
                            <span className="hover:underline dark:text-gray-400">Rafsan Sayed</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="container max-w-4xl px-10 py-6 my-6 mx-auto rounded-lg shadow-lg dark:bg-gray-900">
                <div className="flex items-center justify-between">
                    <span className="text-sm dark:text-gray-400">Jun 1, 2020</span>
                    <p className="px-2 py-1 font-bold rounded dark:bg-violet-400 dark:text-gray-900">Node.js</p>
                </div>
                <div className="mt-3">
                    <pa className="text-2xl font-bold hover:underline">How does Node JS handle multiple requests at the same time?</pa>
                    <p className="mt-2">How NodeJS handle multiple client requests? NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. <a className='text-blue-600' href="https://www.geeksforgeeks.org/how-to-run-many-parallel-http-requests-using-node-js/">...Read more</a></p>
                </div>

                <div className="flex items-center justify-between mt-4">

                    <div>
                        <p className="flex items-center">
                            <img src="https://scontent.fdac8-1.fna.fbcdn.net/v/t39.30808-6/258727252_1247222739124851_3132726739531733063_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeE5Pa45IAf2uRzW1H00WncErasGUaTh1uGtqwZRpOHW4fUtUAh3fHJkzmZxLrYf9Jb2KYekCnWKubE-L_qipPqN&_nc_ohc=8cCHabY7JikAX-HeQ6K&_nc_ht=scontent.fdac8-1.fna&oh=00_AfDPkuIE3sVxjG_whdrcbEOYBcByciCgP-nwNy25uJ7yAA&oe=6371F36A" alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500" />
                            <span className="hover:underline dark:text-gray-400">Rafsan Sayed</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseBlog;