import { useOthent } from "../../Blockchain_Service";

const SignInOthent = () => {
  const othent = useOthent();

  async function logIn() {
    const userDetails = await othent.logIn()
    console.log(userDetails);
  }

  return (
    <div>
      <button onClick={logIn}>SignIn</button>
    </div>
  );
};

export default SignInOthent;
