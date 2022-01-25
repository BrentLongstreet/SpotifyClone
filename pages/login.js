import { getProviders, signIn } from "next-auth/react";

function Login({ providers }) {
  return (
    <div>
      <img
        className="w-52 mb-5"
        src="https://links.papareact.com/9xl"
        alt="spotify"
      />
      {Object.values(providers).map((provider) => (
        <div
          key={provider.name}
          className="absolute top-auto w-20 h-20 bg-transparent right-10 cursor-pointer"
        >
          <button>Hello</button>
        </div>
      ))}
    </div>
  );
}

export default Login;

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}
