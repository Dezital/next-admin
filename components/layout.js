import { AppBar, Toolbar, Typography } from '@mui/material'
import { Head } from 'next/head'
import React from 'react'

export default function layout() {
  return (
      <div>
      <Head>
          <title>Chrizma Data</title>
      </Head>
                <AppBar position='static'>
                    <Toolbar>
                        <Typography>Chrizma Data</Typography>
                    </Toolbar>

                </AppBar>
                </div>
    
  )
}
