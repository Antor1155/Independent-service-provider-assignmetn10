import React from 'react';

const Blogs = () => {
    return (
        <div className='text-center p-5'>
            <h2 className='text-primary m-3'>Question answer section</h2>
            <h4><span className='text-danger'>Question1:</span> Difference between authorization and authentication</h4>
            <p><span className='text-success'> Ans:</span>Authorization is to give permission to a user: where he/she can go, which path is valid for the user, what permissions the user get to deal with data and other factor of the project. On other hand, Authentication means, if the user is Authentic, have some authentica account to be verified or somehow proof to clarify his/her legit existance on Internet. </p>

            <h4><span className='text-danger'>Question1:</span> Why are you using firebase? What other options do you have to implement authentication?</h4>
            <p><span className='text-successmt '> Ans:</span> Firstly, I am using firebase because: this is tought in my course. Other than this, its also from a reputated company which is expected to have one of the most secure system available. Its better to use others authentication system than own, when the other party is the top player of this game around the world. When considering other option, one silly way might be, use own authentication process manually, Auth0, Okta, Amazon Cognito. Those mentioned one might be other options to implement authentication in my system. </p>
            
            <h4><span className='text-danger'>Question1:</span>  What other services does firebase provide other than authentication</h4>
            <p><span className='text-success'> Ans:</span> Other than authentication, firebase also provides hosting services, real time data-base solution, google analytics, machine learning and few other services. Still roam around the firebase website to know more, but till this state am using hosting service and authentication service.</p>
        </div>
    );
};

export default Blogs;