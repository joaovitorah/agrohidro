import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ToastContainer } from 'react-toastify'
import { AppRoutes } from './routes/routes.tsx'
import { Toaster } from './components/ui/toaster.tsx'
import { GlobalStyles } from './styles/GlobalStyles.ts'
import { Modal } from './components/Modal/index.tsx'
import { ModalProvider } from './contexts/ModalContext.tsx'

const queryClient = new QueryClient()

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ModalProvider>
        <AppRoutes />
        <Modal />
        <Toaster />
        <ToastContainer theme="colored" />
        <GlobalStyles />
      </ModalProvider>
    </QueryClientProvider>
  )
}
