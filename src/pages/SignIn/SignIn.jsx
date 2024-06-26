import img from "../../assets/SignIn/signIn.jpg";
import { motion } from "framer-motion";

const SignIn = () => {
  return (
    <div className="bg-white hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row">
        <motion.div
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 1.5 }}
          className="md:w-1/2 w-4/5 md:mr-12"
        >
          <img className="rounded-3xl" src={img} alt="image" />
        </motion.div>
        <motion.div
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ duration: 1.5 }}
          className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
        >
          <div className="card-body">
            <h1 className="text-3xl text-center font-bold">Login</h1>
            <form>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                />
                <p className="text-center my-3">
                  New to user ?{" "}
                  <p className="text-orange-600 font-bold" to="/register">
                    Registration
                  </p>{" "}
                </p>
              </div>
              <div className="form-control">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SignIn;
