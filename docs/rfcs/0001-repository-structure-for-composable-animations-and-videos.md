# 0001 Repository structure for composable animations and videos

- RFC Number: 0001
- Author: @Slashgear
- Status: _PENDING_

## Abstract

We started with @CruuzAzul this project a few months ago first to generate the templates of videos of the association LyonJS (first one, then two, then others).

For the sake of simplicity and speed, copy and paste may have been used excessively to duplicate behaviors and displays.

Then the project evolved to allow to manage event templates other than LyonJS (conferences and partner meetups).
We continued to stack _Compositions_ Remotion in the [Video.tsx](../../src/Video.tsx) file, thinking that we would change that later.

## Motivation

Now it's time to get started, so let's take advantage of this RFC to study a project architecture that will allow us to answer the following challenges:

- Define a composition library to pick useful and extendable video toolkit element to coule be reused in many videos
- Define library of common animation and transition that could be reused in many videos
- Use Lasy loading of composition for Video dictionnary.
- Make life easy for people who fork the repository create their own template.
- Make our basic template customisation ready (theme / color / font / logo)

## Proposal

[Describe the proposed changes or additions to the project.]

## Alternatives

[Discuss any alternative approaches that were considered, and explain why they were rejected.]

## Potential Impacts

[Explain any potential impacts or risks associated with implementing this RFC.]

## References

[List any references, resources, or other relevant information.]

## Acknowledgments

[Optional: acknowledge any individuals or organizations who provided input or assistance in the development of this RFC.]

## Appendices

[Optional: provide any additional information or details that support this RFC, such as code samples or diagrams.]
