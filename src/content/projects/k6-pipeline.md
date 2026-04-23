---
title: "End-to-End k6 Performance Testing Pipeline on Kubernetes"
description: "Automated k6 performance testing integrated into CI/CD and Kubernetes delivery workflows."
order: 1
draft: false
---

# End-to-End k6 Performance Testing Pipeline on Kubernetes

<!-- Case studies are Markdown-based so project content stays portable and separate from page rendering. -->
<!-- The tone stays technical and minimal to describe the work without adding unsupported claims. -->

## Problem

Enterprise APIs need performance testing that can run consistently as part of the release process. Manual test execution is easy to skip, hard to repeat, and disconnected from the systems that actually build and deploy the software.

The goal was to make performance validation part of CI/CD instead of a separate activity. The pipeline needed to handle credentials, build the test runtime, deploy into Kubernetes, and execute k6 tests in a repeatable way.

## Solution

The solution used an Azure DevOps pipeline to coordinate the full workflow:

- Retrieve required secrets during the pipeline run.
- Generate a JWT for authenticated API test execution.
- Build a Docker image containing the k6 test assets and runtime setup.
- Push the image to Artifactory.
- Deploy the workload to Kubernetes.
- Execute k6 tests from the deployed environment.

This kept the test execution close to the same delivery path used by the application platform.

## Architecture

The flow starts in Azure DevOps when the performance test pipeline is triggered. The pipeline retrieves secrets needed for the run, generates a JWT for API authentication, and builds a Docker image with the k6 scripts and execution dependencies.

After the image is built, it is pushed to Artifactory so Kubernetes can pull the exact test image for that run. The pipeline then applies the Kubernetes deployment configuration, starts the k6 workload, and runs the tests against the target enterprise APIs.

Each step is explicit in the pipeline: secret retrieval, token generation, image build, image publish, Kubernetes deployment, and k6 execution. That structure makes the process easier to inspect, rerun, and maintain.

## Outcome

The result is an automated and repeatable performance testing workflow integrated into the release pipeline. Performance tests can be executed through CI/CD, use the same container and Kubernetes patterns as the rest of the platform, and avoid one-off manual setup.

No fabricated performance metrics are included here. The value of this work is in automation, repeatability, and making performance testing part of the delivery system.
