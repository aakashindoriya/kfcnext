import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from 'react-redux'
import Footer from '../Components/HomepageComponents/Footer'
import KFCnavbar from '../Components/Newnavbar'
import { store } from '../Components/redux/store'
export default function App({ Component, pageProps }) {
  return(
    <Provider store={store}>
    <ChakraProvider>
    <KFCnavbar/>
    <Component {...pageProps} />
    <Footer />
    </ChakraProvider>
    </Provider>
)}
