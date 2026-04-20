package com.jobpilot.ai.data

import com.jobpilot.ai.models.Job
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.flow
import retrofit2.http.GET

interface JobApiService {
    @GET("api/jobs")
    suspend fun getDiscoveredJobs(): List<JobRemote>
}

data class JobRemote(
    val id: String,
    val title: String,
    val company: String,
    val matchScore: Int
)

class JobRepository(private val apiService: JobApiService) {
    fun getJobs(): Flow<List<Job>> = flow {
        val remoteJobs = apiService.getDiscoveredJobs()
        emit(remoteJobs.map { it.toDomain() })
    }
}

fun JobRemote.toDomain() = Job(id, title, company, matchScore)
