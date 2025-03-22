import { Loader } from 'lucide-react'


const LoadingSpinner = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <Loader className="w-16 h-16 text-blue-600 animate-spin" />
      <p className="mt-4 text-lg font-semibold text-gray-700">Loading, please wait...</p>
    </div>
  )
}

export default LoadingSpinner