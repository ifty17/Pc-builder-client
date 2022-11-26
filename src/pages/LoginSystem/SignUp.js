import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import toast from "react-hot-toast";
import LoadingSpinner from '../Components/LoadingSpinner';

const SignUp = () => {
    const {
      createUser,
      googleSignIn,
      setLoading,
      updateUserProfile,
      loading,
    } = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const from = location.state?.from?.pathname || "/";

    const handleSignUp = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const role = form.role.value;
        const image = form.image.files[0];
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, role, image, email, password);

       
         const formData = new FormData();
         formData.append("image", image);

         const url =
           "https://api.imgbb.com/1/upload?key=81c077d88a2ff4a629a342194065431e";

         fetch(url, {
           method: "POST",
           body: formData,
         })
           .then((res) => res.json())
           .then((data) => {
             console.log(data.data.display_url);
             createUser(email, password)
               .then((result) => {
                 updateUserProfile(name, data.data.display_url)
                 .then(result =>{
                     navigate(from, { replace: true });
                     form.reset();
                     setError("");
                     navigate(from, { replace: true });
                     toast.success("User created successfully");
                    })
                    const user = result.user;
                    console.log(user);
               })
               .catch((err) => {
                 console.error(err);
                 setLoading(false);
                 setError(err.message);
               });
           })
           .catch((err) => console.log(err));



            const user = {
              displayName : name,
              email,
              role,
            };
            fetch("http://localhost:5000/users", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(user),
            })
              .then((res) => res.json())
              .then((data) => console.log(data));


    };
    
    
    const handleGoogleLogin = () => {
      googleSignIn()
         .then((result) => {
           const user = result.user;
          //  console.log(user);
          setError('')
          navigate(from, { replace: true });
          })
          .catch((error) => {
            console.error(error);
            setError(error.message);
            setLoading(false);
          });
          
        };
        



    return (
      <div className="flex justify-center items-center py-8">
        <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900">
          <div className="mb-8 text-center">
            <h1 className="my-3 text-4xl font-bold">Signup</h1>
            <p className="text-sm text-gray-400">Create a new account</p>
          </div>
          <form
            onSubmit={handleSignUp}
            noValidate=""
            action=""
            className="space-y-12 ng-untouched ng-pristine ng-valid"
          >
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block mb-2 text-sm">
                  Name
                </label>
                <input
                  required
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter Your Name Here"
                  className="w-full px-3 py-2 border rounded-md input input-bordered input-primary"
                  data-temp-mail-org="0"
                />
              </div>
              <div>
                <label htmlFor="select" className="block mb-2 text-sm">
                  Select account type
                </label>
                <select
                  name="role"
                  required
                  className="select select-primary w-full max-w-xs"
                >
                  <option>buyer</option>
                  <option>seller</option>
                </select>
              </div>
              <div>
                <label htmlFor="image" className="block mb-2 text-sm">
                  Select Image:
                </label>
                <input
                  required
                  type="file"
                  id="image"
                  name="image"
                  accept="image/*"
                  className="file-input file-input-bordered file-input-primary w-full max-w-xs"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm">
                  Email address
                </label>
                <input
                  required
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter Your Email Here"
                  className="w-full px-3 py-2 border rounded-md input input-bordered input-primary"
                  data-temp-mail-org="0"
                />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <label htmlFor="password" className="text-sm">
                    Password
                  </label>
                </div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  required
                  placeholder="*******"
                  className="w-full px-3 py-2 border rounded-md input input-bordered input-primary"
                />
              </div>
            </div>
            <div className="space-y-2">
              <div>
                <button
                  type="submit"
                  className="btn btn-primary w-full btn-outline"
                >
                  {loading ? <LoadingSpinner></LoadingSpinner> : "Sign Up"}
                </button>
              </div>
            </div>
          </form>

          <div className="flex items-center pt-4 space-x-1">
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
            <p className="px-3 text-sm dark:text-gray-400">
              Signup with social accounts
            </p>
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          </div>
          <div className="flex justify-center space-x-4">
            <button
              onClick={handleGoogleLogin}
              aria-label="Log in with Google"
              className="p-3 flex justify-center rounded-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="w-[15%] fill-current"
              >
                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
              </svg>
            </button>
          </div>
          <p className="px-6 text-sm text-center text-gray-400">
            Already have an account yet?{" "}
            <Link to="/login" className="hover:underline text-gray-600">
              Login now
            </Link>
            .
          </p>
          <p className="py-3 text-red-600">{error}</p>
        </div>
      </div>
    );
};

export default SignUp;