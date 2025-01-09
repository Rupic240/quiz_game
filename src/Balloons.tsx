import { TryAgainText } from './TryAgainText'

const B_ONE = (
    <div className="flex flex-col items-center">
        <div className="w-14 h-16 top-8 z-10 rounded-[100%] bg-gradient-radial from-red-400 to-red-600 
            shadow-[inset_-2px_-2px_4px_rgba(0,0,0,0.2),_0_4px_8px_rgba(248,113,113,0.4),_0_2px_12px_rgba(248,113,113,0.6)] 
            hover:scale-110 hover:shadow-[inset_-2px_-2px_4px_rgba(0,0,0,0.2),_0_6px_15px_rgba(248,113,113,0.6),_0_2px_20px_rgba(248,113,113,0.8)]
            transition-all duration-500 animate-float" />
        <div className="w-1 h-32 left-[50%] -translate-x-[50%] bottom-0 bg-white -z-10" />
    </div>
)
const B_TWO = (
    <div className="flex flex-col items-center">
        <div className="w-14 h-16 top-8 z-10 rounded-[100%] bg-gradient-radial from-amber-400 to-amber-600 
            shadow-[inset_-2px_-2px_4px_rgba(0,0,0,0.2),_0_4px_8px_rgba(251,191,36,0.4),_0_2px_12px_rgba(251,191,36,0.6)]
            hover:scale-110 hover:shadow-[inset_-2px_-2px_4px_rgba(0,0,0,0.2),_0_6px_15px_rgba(251,191,36,0.6),_0_2px_20px_rgba(251,191,36,0.8)]
            transition-all duration-500 animate-float-delay-1" />
        <div className="w-1 h-32 left-[50%] -translate-x-[50%] bottom-0 bg-white -z-10" />
    </div>
)
const B_THREE = (
    <div className="flex flex-col items-center">
        <div className="w-14 h-16 top-8 z-10 rounded-[100%] bg-gradient-radial from-lime-400 to-lime-600 
            shadow-[inset_-2px_-2px_4px_rgba(0,0,0,0.2),_0_4px_8px_rgba(132,204,22,0.4),_0_2px_12px_rgba(132,204,22,0.6)]
            hover:scale-110 hover:shadow-[inset_-2px_-2px_4px_rgba(0,0,0,0.2),_0_6px_15px_rgba(132,204,22,0.6),_0_2px_20px_rgba(132,204,22,0.8)]
            transition-all duration-500 animate-float-delay-2" />
        <div className="w-1 h-32 left-[50%] -translate-x-[50%] bottom-0 bg-white -z-10" />
    </div>
)
const B_FOUR = (
    <div className="flex flex-col items-center">
        <div className="w-14 h-16 top-8 z-10 rounded-[100%] bg-gradient-radial from-purple-400 to-purple-600 
            shadow-[inset_-2px_-2px_4px_rgba(0,0,0,0.2),_0_4px_8px_rgba(168,85,247,0.4),_0_2px_12px_rgba(168,85,247,0.6)]
            hover:scale-110 hover:shadow-[inset_-2px_-2px_4px_rgba(0,0,0,0.2),_0_6px_15px_rgba(168,85,247,0.6),_0_2px_20px_rgba(168,85,247,0.8)]
            transition-all duration-500 animate-float-delay-3" />
        <div className="w-1 h-32 left-[50%] -translate-x-[50%] bottom-0 bg-white -z-10" />
    </div>
)
const B_FIVE = (
    <div className="flex flex-col items-center">
        <div className="w-14 h-16 top-8 z-10 rounded-[100%] bg-gradient-radial from-indigo-400 to-indigo-600 
            shadow-[inset_-2px_-2px_4px_rgba(0,0,0,0.2),_0_4px_8px_rgba(99,102,241,0.4),_0_2px_12px_rgba(99,102,241,0.6)]
            hover:scale-110 hover:shadow-[inset_-2px_-2px_4px_rgba(0,0,0,0.2),_0_6px_15px_rgba(99,102,241,0.6),_0_2px_20px_rgba(99,102,241,0.8)]
            transition-all duration-500 animate-float-delay-4" />
        <div className="w-1 h-32 left-[50%] -translate-x-[50%] bottom-0 bg-white -z-10" />
    </div>
)
const B_SIX = (
    <div className="flex flex-col items-center">
        <div className="w-14 h-16 top-8 z-10 rounded-[100%] bg-gradient-radial from-orange-400 to-orange-600 
            shadow-[inset_-2px_-2px_4px_rgba(0,0,0,0.2),_0_4px_8px_rgba(251,146,60,0.4),_0_2px_12px_rgba(251,146,60,0.6)]
            hover:scale-110 hover:shadow-[inset_-2px_-2px_4px_rgba(0,0,0,0.2),_0_6px_15px_rgba(251,146,60,0.6),_0_2px_20px_rgba(251,146,60,0.8)]
            transition-all duration-500 animate-float-delay-5" />
        <div className="w-1 h-32 left-[50%] -translate-x-[50%] bottom-0 bg-white -z-10" />
    </div>
)
const B_SEVEN = (
    <div className="flex flex-col items-center">
        <div className="w-14 h-16 top-8 z-10 rounded-[100%] bg-gradient-radial from-cyan-400 to-cyan-600 
            shadow-[inset_-2px_-2px_4px_rgba(0,0,0,0.2),_0_4px_8px_rgba(34,211,238,0.4),_0_2px_12px_rgba(34,211,238,0.6)]
            hover:scale-110 hover:shadow-[inset_-2px_-2px_4px_rgba(0,0,0,0.2),_0_6px_15px_rgba(34,211,238,0.6),_0_2px_20px_rgba(34,211,238,0.8)]
            transition-all duration-500 animate-float-delay-6" />
        <div className="w-1 h-32 left-[50%] -translate-x-[50%] bottom-0 bg-white -z-10" />
    </div>
)

const BALLOONS = [B_ONE, B_TWO, B_THREE, B_FOUR, B_FIVE, B_SIX, B_SEVEN]

type BalloonsProps = {
    numberOfGuessed: number
}

export function Balloons({ numberOfGuessed }: BalloonsProps) {
    return (
        <div className="h-80 w-[600px] flex flex-col justify-end relative">
            <div className="flex gap-5">
                {
                    BALLOONS.map((balloon, index) => {
                        return (
                            <div key={index}
                                className={`w-full h-full transition-all duration-1000 
                                    ${index < numberOfGuessed ? 'opacity-0 translate-y-[-200px]' : 'opacity-100 translate-y-0'}`}
                            >
                                {balloon}
                            </div>
                        )
                    })
                }
            </div>
            {
                numberOfGuessed >= 7 ? (
                    <div className="absolute left-1/2 -translate-x-1/2 bottom-10">
                        <TryAgainText />
                    </div>
                ) : (
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-white" />
                )
            }

        </div>
    )
}
