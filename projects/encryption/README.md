
# Encryption Activity Reflection


## Part 1: Key Exchange

My Key:ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQCvf3uIFl5oi08NzaAMZtPki/CACqxGD9yraSPsMH/IsE2CTezL4wQZXhWLQ4WhjzxbkTF4dq4X3iRXck6OvKXO0GveOsHFM6bYjz+pU0oiL+wMsKMBODl93ZcUEA+mbHrLZjbjxvO0dnpiUpwhEgyYO8qQMA4xC9ryCjS/MQvATcvUO9GgMeC3AWrVy8vkQSdR3OVLN9zV53KlVCW35BIyJsi38VZMYPCA6oCTdSg1QnO0JaUxQWibExUbUx/oW0e4tetobaM4I+q2mvSrai2gS3yD/6iJeucudMV8qre1NtAGrUTrwgjJ0kK8ERsDmMolVDZYSEAcb0ro9ewSUvPq1lwON4wSF09MfgwMClcpNCob2IXFJQcFVGPWpUhRx1NbQsIHb5FUM5c5fjz1rR9TET90NL5hGRU2LnYqyvvIVV8OrNNoB8z+8rwRxEfvj2qBFwDZREHc6Lb6YPJyXDD4v2G9GfHza3cHTw3lJ7KoNrznjYySzEOETvsHdyEEIYU=

My Partner's Key:ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQC1c20Z7Hi2iJQyJ0NLbWk1NZ0cbZxojFVNAbyIMNn7FwIPFwwIRD+kSEJOQPW8iualzwzOObSz7ErMibp/659tI4p3aUJGMuOmQoePdDkQaEhay/rWA/mZYAcGsIxTxORImacKMbBMDbIkBhBJO3HJND4BRWv1xYFHzL9tnx5afpvofECCPnJT48DEwz6nZkBpPwHodPbTrZJi1AbWl/SKQg2U0RVcfPi4cLNgAyp7XbSSba+kiycfu33MEU+y+s3/iBu1rKxT6gxUS8xpuxUHr5+vY5GKjqsf5dsl1TzfUVgm6n1KEBQrWWKiOfjOFJfGSDfT+zcssCly+Y+jyQ07GIys4HE2bU6rT8bf/TWb+Ez1U3ajsgguZ5D5p7pokVwjCOQ3X1rQpJofffbbZbs1Fx/tPRHlW/JKARj8jtoyOKN+7iqEonCOeEXcLJxi/Hm0MQNbBc9pDtgt5yONU9B83B/4FodwS9Valq60K5BCmzaT7t0A51IzNQgaHiQ7mvk=

Our initial shared key: 3L

## Part 2: Messaging

Complete this table with each of your messages. This should 
include the entire conversation - the messages that you sent
and the messages that you received.

(If you used something other than the caesar cipher here, describe what you did)

| Encoded Message | Decoded Message | Key |
| --------------- | --------------- | --- |
|    Qeb TloIa    |   The World     | 3L  |
|  Csh cofox      | Six Seven       | 10R |
|Rpih pgr qriirg  | Cats are better | 11L |
|  Ita ue vaq     | Who is Joe      | 14L |


## Part 3: Connection to TCP/IP Model

### Application Layer: Turn your message into binary

Everything we've done in this activity takes place in the application layer. By the time the message leaves the application
layer, it is encoded in binary. We've been working with text for this activity for convenience, but let's see what the binary
looks like.

Go back to the first encrypted message that you sent (it should be in `rsa_encryption_activity/send/encrypted_message.b64`).

This message is represented as a string of letters, numbers, and symbols. But we know that the real message is in binary.

Select the first six characters from this message and copy them here:N/15+F

Using the ASCII table, convert these five characters to binary (if necessary,
include leading zeroes so that each character is 8 bits): 01001110 00101111 00110001 00110101 00101011 01000110

### Transport Layer: Break your message into packets

Assume that each packet can hold two bytes. Fill in the packet information below with the binary values you computed above.

    =========
    Packet 1:

    Source: [Cole]
    Destination: [Carlos]  
    Sequence: 1/3
    Data: [01001110] [00101111]
    =========
    Packet 2:

    Source: [Cole]
    Destination: [Carlos]
    Sequence: 2/3 
    Data: [00110001] [00110101]
    =========
    Packet 3:

    Source: [Cole]
    Destination: [Carlos]
    Sequence: 3/3
    Data: [00101011] [01000110]
    =========

## Part 4: Reflection Questions

- What is the difference between symmetric and asymmetric encryption? What purpose did each serve in this simulation?

Well the diffrence is that symetric encryption requires a shared seceret that both and only both parties have. Asymmetric encryption is when you both share a public key with everyone, but you also each keep a seceret key that can decode anything that was encoded by your public key.

- Why is it important that this protocol uses a new key for each message?

because if you cracked the ceaser cypher the fisrt time then you can read everything. so we had to mix it up using math, but if they figured out what math we were using they could still anticipate what were going to use to encrypt the messege.

- Why is it important that you never share your secret key?

Because if you share you seceret key then anyone or just the person your sharing it with will be able to see what people are sending you. the won't be able to see what your sending though unless your contact also shared their seceret key.

- In the transport layer, do these messages use TCP or UDP? Why?

TCP sending messeges like this doesn't require realtime updates like face-time does, although technicly I think they could use ethier if absolutly nessisary.

- Now that you've created packets in the transport layer, give a short explanation of what happens to these packets in the internet layer and in the link layer. 

Well in the internet layer the pacets are routed ensuring they reach their destination. In the link layer on the other hand uses protocols like wifi or bluetooth to send data and also I think it does headers and adresses.

- This protocol successfully encrypts the **content** of the message. Even though and adversary in the middle can't read the content of the message, what other
information can they still see?

They can see that I sent it and who it is to, they can also see a bunch of weird text. they may or may not be able to tell how many characters there are but nothing else.

