import React from 'react';
import { Phase } from "./Walkthrough";
import { commentary, embed, IWalkthroughArgs, setInitialCamera } from "./WalkthroughTools";
import s from './Walkthrough.module.scss';
import { Vec3 } from '@/src/utils/vector';

let minGptLink = 'https://github.com/karpathy/minGPT';
let pytorchLink = 'https://pytorch.org/';
let andrejLink = 'https://karpathy.ai/';
let zeroToHeroLink = 'https://karpathy.ai/zero-to-hero.html';

export function walkthrough01_Prelim(args: IWalkthroughArgs) {
    let { state, walkthrough: wt } = args;

    if (wt.phase !== Phase.Intro_Prelim) {
        return;
    }

    setInitialCamera(state, new Vec3(184.744, 0.000, -636.820), new Vec3(296.000, 16.000, 13.500));

    let c0 = commentary(wt, null, 0)`
Before we delve into the algorithm's intricacies, let's take a brief step back.

This guide focuses on _inference_, not training, and as such is only a small part of the entire machine-learning process.
In our case, the model's weights have been pre-trained, and we use the inference process to generate output. This runs directly in your browser.

The model showcased here is part of the GPT (generative pre-trained transformer) family, which can be described as a "context-based token predictor".
OpenAI introduced this family in 2018, with notable members such as GPT-2, GPT-3, and GPT-3.5 Turbo, the latter being the foundation of the widely-used ChatGPT.
It might also be related to GPT-4, but specific details remain unknown.

This guide was inspired by the ${embedLink('minGPT', minGptLink)} GitHub project, a minimal GPT implementation in ${embedLink('PyTorch', pytorchLink)}
created by ${embedLink('Andrej Karpathy', andrejLink)}.
His YouTube series ${embedLink("Neural Networks: Zero to Hero", zeroToHeroLink)} and the minGPT project have been invaluable resources in the creation of this
guide. The toy model featured here is based on one found within the minGPT project.

Alright, let's get started!
`;

}

export function embedLink(a: React.ReactNode, href: string) {
    return embedInline(<a className={s.externalLink} href={href} target="_blank" rel="noopener noreferrer">{a}</a>);
}

export function embedInline(a: React.ReactNode) {
    return { insertInline: a };
}


// Another similar model is BERT (bidirectional encoder representations from transformers), a "context-aware text encoder" commonly
// used for tasks like document classification and search.  Newer models like Facebook's LLaMA (large language model architecture), continue to use
// a similar transformer architecture, albeit with some minor differences.
