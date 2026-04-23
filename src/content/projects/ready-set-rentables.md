---
title: "AI-Powered Market Analysis Platform"
description: "Market analysis architecture for AI-generated neighborhood insights across 32+ markets."
order: 2
draft: false
---

<!-- Markdown keeps the case study editable without coupling the content to Astro components. -->
<!-- The write-up stays direct because the useful detail is the architecture and cost tradeoff. -->

## Problem

ReadySetRentables needed AI-driven neighborhood insights across 32+ markets. The system had to support repeatable market profile generation while keeping model usage costs under control.

## Solution

The platform used a data ingestion and transformation pipeline to prepare market data for AI-generated profiles. The output was structured around neighborhood and market context rather than one-off prompts.

Development was AI-assisted. The architecture still required explicit decisions about data flow, model selection, cost control, and where to run workloads.

## Architecture

The system used a hybrid model approach:

- Claude API for hosted model calls.
- Local models through Ollama and vLLM.
- RunPod GPUs for workloads that needed hosted GPU capacity.
- PostgreSQL as the primary data layer.

This gave the platform options for routing work between hosted APIs, local inference, and GPU-backed execution depending on cost and workload requirements.

## Outcome

The architecture reduced estimated cost from about $40 per market to about $6 per market, roughly an 85% reduction. The main value was not just lower cost; it was having a repeatable system for producing market analysis while controlling where model work runs.
