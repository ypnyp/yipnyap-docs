---
id: kukiko
title: AI and Toxicity
sidebar_label: Kukiko
---

<img src="/img/kukiko.png" width="455" />

Kukiko is the automod of Yipnyap. She ensures rules aren't being broken and everyone is playing nice!

# Heads up!
Things will change soon! Right now, toxic posts are automatically rejected, however later once our Moderator Dashboard is
made, they'll only be silently marked as questionable for a moderator to approve or reject themselves.

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
Kukiko is smart, and can check a crap ton of things! We'll cut to the chase, so here's the list:
- Pedophilia
- Zoophilia
- Attacks based on someone's identity (Sexuality, Gender, Pronouns, Age, BIPOC, Religion, Culture, etc.).
- Politics that may incite toxic discussions.
- Posts that may not be of value, not understandable, or too vulgar.
- Posts that may break our code of conduct to date and do not fit other reasons in this list.
- Posts from PG-13 accounts that may be sexually explicit, or posts from R18 accounts that contain extreme pornography.
  - *this only gets silently marked for a moderator to manually check.*
- Unsolicited flirting with others.
- Mass advertisements and spam.
