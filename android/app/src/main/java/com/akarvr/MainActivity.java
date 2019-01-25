package com.akarvr;

import com.facebook.react.ReactActivity;

import org.devio.rn.splashscreen.SplashScreen; // import this
import android.graphics.Color;
import android.os.Bundle;


import com.facebook.react.ReactInstanceManager;
import com.facebook.react.bridge.ReactContext; // import this

public class MainActivity extends ReactActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        SplashScreen.show(this);  // here
        super.onCreate(savedInstanceState);
    }



    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "akarVR";
    }
    
}
