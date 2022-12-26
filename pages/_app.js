import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from 'react-redux'
import Navbar from '../Components/navbar'
import { store } from '../Components/redux/store'
export default function App({ Component, pageProps }) {
  return(
    <Provider store={store}>
    <ChakraProvider>
    <Navbar />
    <Component {...pageProps} />
    </ChakraProvider>
    </Provider>
)}
