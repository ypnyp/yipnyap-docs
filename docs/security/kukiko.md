---
id: kukiko
title: Content Safety & Moderation
sidebar_label: Content Safety & Moderation
---

<img src="/img/kukiko.png" width="455" />

Kukiko is the automod of Yipnyap. She ensures rules aren't being broken and everyone is playing nice!

:::warning This page covers topics that may be unsettling
This page contains topics such as homophobia, MAPs, racism, and more.

We understand that what we disallow from Yipnyap may be considered censorship to some people, but we do this to protect
everyone's safety on the platform. We only remove content that may harm others, which you can see below
[here](#what-does-kukiko-check).
:::

:::info How we reject content will change
Things will change soon! Right now, toxic posts are automatically rejected, however later once our Moderator Dashboard is
made, they'll only be silently marked as questionable for a moderator to approve or reject themselves.
:::

# Kukiko Soteria
Kukiko Soteria is a **highly experimental** collection of Machine Learning models to provide users and moderators an
easier way to see if a post falls under our Code of Conduct.

For example, if you try to send a message that contains `stop being so f****** gay`, Soteria would automatically block that
post from showing, and will return the following from the API (where `perspective.summary` is all scores calculated
altogether, summary score of higher than `0.85` is bad, attribute score of higher than `0.60` *should be considered*
bad.)
```javascript
{
    error: {
        message: 'kukiko deemed post too toxic',
        detail: {
            perspective: {
                languages: [
                    'en'
                ],
                summary: 0.89414346,
                attributes: {
                    attackOnCommenter: 0.26266629,
                    attackOnIdentity: 0.9624135,
                    insult: 0.9535211,
                    profanity: 0.9826044,
                    threat: 0.23984843,
                    sexuallyExplicit: 0.6522458,
                    flirtation: 0.19228417,
                    incoherent: 0.053898577,
                    inflammatory: 0.3908744,
                    codeOfConductLikelihood: 0.99978846,
                    obscene: 0.9892319,
                    spam: 0.028513622,
                    unsubstantial: 0.13743496
                }
            }
        }
    },
    status: 403
}
```

# What does Kukiko check?
We'll cut to the chase. Here's the list of things that may be automatically reported:

("Content" refers to anything that leaves the client's computer, which includes but not limited to; profile data, posts,
replies, likes, repaws, etc.)

:::info Reliability & Actions
If the model returns a high accuracy rate, **the entire user account will be comment ghosted** until action is taken on
the content at hand. This may also result in a user account being suspended or terminated.

Even if Kukiko doesn't find anything, our Moderators hold the right to remove any content that they find violate our
rules and guidelines, as well as hold the right to reject an appeal for any given reason except the reason of personal
bias. You hold the right to hand an issue higher if you feel a Moderator also breaks our rules and guidelines.
:::

- Pedophilia
- Zoophilia
- Attacks based on someone's identity (Sexuality, Gender, Pronouns, Age, People of Colour, Religion, Culture,
  Ethnicity, etc.).
  - This includes purposefully using someone's incorrect pronouns, or their dead name, as well as telling others to use
    "fake" pronouns when referring to you and/or others with the intention of making fun of others and/or disrespect.
- Content that may break our code of conduct to date and do not fit other reasons in this list.
- Content from PG-13 accounts that may be sexually explicit, or posts from R18 accounts that contain extreme pornography.
- Unsolicited flirting with others.
- Mass advertisements and spam.
- Content that express the intention of self-harm, or the harming of others, even if satire.
- Content that express views that may be harmful to others, which includes but not limited to;
  - Right-wing extremism
  - Homophobia
  - Transphobia
  - Racism
  - Fascism
  - Downplaying the severity of other issues, for example, displaying strong support towards "Blue/White Lives Matter"
    groups.
