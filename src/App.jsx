import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import Loader from "./common/Loader";
import RouterConfig from "./routes/RouterConfig";
import { QueryClient, QueryClientProvider } from "react-query";
import { AuthProvider } from "./context/auth/AuthProvider";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  const queryClient = new QueryClient();

  return loading ? (
    <Loader />
  ) : (
    <>
      <Toaster
        position="top-right"
        reverseOrder={false}
        containerClassName="overflow-auto"
      />
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <RouterConfig />
        </QueryClientProvider>
      </AuthProvider>
    </>
  );
}

export default App;
