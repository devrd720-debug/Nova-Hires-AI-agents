package com.jobpilot.ai.ui.screens

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Star
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp

@Composable
fun DashboardScreen(onNavigateToHunter: () -> Unit) {
    Scaffold(
        topBar = {
            CenterAlignedTopAppBar(
                title = { Text("JobPilot AI", fontWeight = FontWeight.Bold) }
            )
        }
    ) { padding ->
        LazyColumn(
            modifier = Modifier
                .padding(padding)
                .fillMaxSize()
                .padding(16.dp),
            verticalArrangement = Arrangement.spacedBy(16.dp)
        ) {
            item {
                Text(
                    text = "Agent Activity",
                    style = MaterialTheme.typography.titleMedium,
                    color = Color.Gray
                )
            }
            
            item {
                AgentStatusCard(name = "Hunter", status = "Scanning FAANG", progress = 0.85f)
            }
            
            item {
                AgentStatusCard(name = "Tailor", status = "Idle", progress = 0f)
            }
            
            item {
                Button(
                    onClick = onNavigateToHunter,
                    modifier = Modifier.fillMaxWidth(),
                    shape = RoundedCornerShape(12.dp)
                ) {
                    Text("Enter Discovery (Hunter)")
                }
            }
            
            item {
                MatchCard(
                    title = "Senior Engineer",
                    company = "Google",
                    matchScore = "95%"
                )
            }
        }
    }
}

@Composable
fun AgentStatusCard(name: String, status: String, progress: Float) {
    Card(
        modifier = Modifier.fillMaxWidth(),
        shape = RoundedCornerShape(16.dp)
    ) {
        Column(modifier = Modifier.padding(16.dp)) {
            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.SpaceBetween,
                verticalAlignment = Alignment.CenterVertically
            ) {
                Text(name, fontWeight = FontWeight.Bold, fontSize = 18.sp)
                Text(status, style = MaterialTheme.typography.bodySmall)
            }
            Spacer(modifier = Modifier.height(8.dp))
            LinearProgressIndicator(
                progress = progress,
                modifier = Modifier.fillMaxWidth(),
                trackColor = Color.LightGray
            )
        }
    }
}

@Composable
fun MatchCard(title: String, company: String, matchScore: String) {
    Card(
        modifier = Modifier.fillMaxWidth(),
        shape = RoundedCornerShape(16.dp),
        colors = CardDefaults.cardColors(containerColor = Color(0xFFFFF0E6))
    ) {
        Row(
            modifier = Modifier.padding(16.dp).fillMaxWidth(),
            horizontalArrangement = Arrangement.SpaceBetween
        ) {
            Column {
                Text(title, fontWeight = FontWeight.ExtraBold)
                Text(company, style = MaterialTheme.typography.bodySmall)
            }
            Column(horizontalAlignment = Alignment.End) {
                Text(matchScore, fontWeight = FontWeight.Bold, color = Color(0xFFF97316))
                Text("Match", fontSize = 10.sp, color = Color.Gray)
            }
        }
    }
}
Image(
    painter = painterResource(id = R.drawable.logo),
    contentDescription = "NovaHire Logo",
    modifier = Modifier.size(48.dp) // Adjust sizing as needed
)
