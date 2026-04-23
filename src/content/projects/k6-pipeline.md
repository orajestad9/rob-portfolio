---
title: "End-to-End k6 Performance Testing Pipeline on Kubernetes"
description: "Automated k6 performance testing integrated into CI/CD and Kubernetes delivery workflows."
order: 1
draft: false
---

<!-- Case studies are Markdown-based so project content stays portable and separate from page rendering. -->
<!-- The tone stays technical and minimal to describe the work without adding unsupported claims. -->

## Problem

Performance testing in this environment was not integrated into the release process. Tests were run manually or through ad-hoc scripts, which made them easy to skip and difficult to reproduce consistently.

As the system evolved, this created risk:
- performance regressions could reach production undetected
- test execution varied between runs
- validation was disconnected from the actual deployment pipeline

The core problem was the absence of a repeatable, automated way to validate performance as part of CI/CD.

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
