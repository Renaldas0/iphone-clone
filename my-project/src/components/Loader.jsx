import { Html } from '@react-three/drei'

const Loader = () => {
    return (
        <Html>
            <div className='abolute top-0 left-0 w-full h-full justify-center items-center'>
                <div className='w-[10vw] h-[10wh] rounded-full'>
                    Loading...
                </div>
            </div>
        </Html>
    )
}

export default Loader;