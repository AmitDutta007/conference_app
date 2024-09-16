'use client'

import { StreamCall, StreamTheme } from '@stream-io/video-react-sdk'
import React from 'react'

const Meeting = ({ params }: { params: { id: string } }) => {
    return (
        <main className="h-screen w-full">
            <StreamCall
            //   call={call}
            >
                <StreamTheme>
                    {/* 
        {!isSetupComplete ? (
          <MeetingSetup setIsSetupComplete={setIsSetupComplete} />
        ) : (
          <MeetingRoom />
        )} */}
                </StreamTheme>
            </StreamCall>
        </main>
    )
}

export default Meeting