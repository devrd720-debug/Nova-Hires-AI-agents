package com.jobpilot.ai

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Surface
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.compose.rememberNavController
import com.jobpilot.ai.ui.screens.DashboardScreen
import com.jobpilot.ai.ui.theme.JobPilotTheme

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            JobPilotTheme {
                Surface(
                    modifier = Modifier.fillMaxSize(),
                    color = MaterialTheme.colorScheme.background
                ) {
                    JobPilotApp()
                }
            }
        }
    }
}

@Composable
fun JobPilotApp() {
    val navController = rememberNavController()
    
    NavHost(navController = navController, startDestination = "dashboard") {
        composable("dashboard") {
            DashboardScreen(onNavigateToHunter = {
                navController.navigate("hunter")
            })
        }
        composable("hunter") {
            // Hunter screen implementation
        }
    }
}
Image(
    painter = painterResource(id = R.drawable.logo),
    contentDescription = "NovaHire Logo",
    modifier = Modifier.size(48.dp) // Adjust sizing as needed
)
