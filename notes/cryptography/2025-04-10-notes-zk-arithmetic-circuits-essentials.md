---
title: "Notes on ZK Arithmetic Circuits, Essential"
summary: "About this page."
date: 2016-04-13
layout: post
---

_Note: The content contained here is subject to corrections and edits._

Circuits are used to represent a computation with the goal of transforming the circuit into a constraint system. We can represent the computation by breaking down a mathematical statement or expression into operations with addition and multiplication over a finite field. The end goal is to convert the computation to a constraint system such as R1CS (Rank-1 Constraint Systems) or AIR (Algebraic Intermediate Representation).

You can represent very simply computations or you can represent very complex computations such as hash functions, smart contracts and blockchain state transitions. This enables more complex and interesting use cases such as Tornado Cash and a ZkEVM.

So a simple computation we can represent could be in the following form:

$$
x * y = 5
$$

To represent it as a circuit we need to first ***flatten*** it.
 
How does that look? What does it mean to go undergo the flattening process? Circuits contain three components: inputs, outputs and gates. 
 
 Take a look at the computation we defined above. If we dissect it into the three components we get:

**Inputs:** x, y
**Output:** 5
**Gate:** One multiplication gate (*)

If we visualize this we can look at the computation as:

<div class="mermaid">
graph LR
    X[x] --> MUL((×))
    Y[y] --> MUL
    MUL --> OUT[5]
    
    classDef input fill:#d1f0ff,stroke:#333,stroke-width:2px;
    classDef gate fill:#ffe6cc,stroke:#333,stroke-width:2px;
    classDef output fill:#e6ffe6,stroke:#333,stroke-width:2px;
    
    class X,Y input;
    class MUL gate;
    class OUT output;
</div>

Take a slightly more complex computation. One which involves an intermediary step:
$$
x * y + w = z
$$


We can break this down as the following gates:


$$
x * y = temp
$$

$$
temp + w = z
$$

and finally we get:

<div class="mermaid">
graph LR
    X[x] --> MUL((×))
    Y[y] --> MUL
    MUL --> TEMP[temp]
    TEMP --> ADD((+))
    W[w] --> ADD
    ADD --> Z[z]
    
    classDef input fill:#d1f0ff,stroke:#333,stroke-width:2px;
    classDef gate fill:#ffe6cc,stroke:#333,stroke-width:2px;
    classDef intermediate fill:#fff2cc,stroke:#333,stroke-width:2px;
    classDef output fill:#e6ffe6,stroke:#333,stroke-width:2px;
    
    class X,Y,W input;
    class MUL,ADD gate;
    class TEMP intermediate;
    class Z output;
</div>

Do the above visualizations look familiar? They should. We can readily define a circuit to be very similar to that of a Boolean circuit or digital logic circuit. The operations of AND and XOR become multiplication and addition. So we can represent the circuit as a sort of DAG showing the inputs, operations and outputs that the computation relies on. This is the flattening process. 

This table shows some of the differences between a boolean circuit and arithmetic circuit. You can start building an intuition for arithmetic circuits by comparing the two.

## Comparison: Boolean Circuits vs. Arithmetic Circuits

| Feature | Boolean Circuits | Arithmetic Circuits |
|---------|-----------------|---------------------|
| **Basic Operations** | AND, OR, NOT, XOR | Addition, Multiplication |
| **Value Domain** | Binary (0,1) | Elements of a finite field |
| **Representation of Numbers** | Bit-by-bit (binary) | Direct field elements |
| **Typical Applications** | Hardware design, Traditional cryptography | ZK proofs, Homomorphic encryption |
| **Efficiency for Arithmetic** | Poor (many gates for basic operations) | Excellent for field operations |
| **Efficiency for Comparisons** | Excellent | Poor (requires many gates) |
| **Efficiency for Bit Operations** | Excellent | Poor (requires decomposition) |
| **Circuit Size for Complex Functions** | Often larger for arithmetic | Often smaller for arithmetic |
| **Natural Expression of** | Bitwise operations, Comparisons | Field arithmetic, Polynomial evaluation |
| **Constraint Representation** | CNF, ANF | R1CS, QAP, AIR |
| **Typical Circuit Depth** | Can be optimized to be shallow | Often deeper for complex operations |
| **Standard Optimization Goals** | Minimize gates, Reduce depth | Minimize multiplication gates |

I won't cover circuit depth here, but you can image as the circuit grows more complex, the proof size may increase and the performance of the verification mechanism may decrease.

**A theoretical definition**

**Flattening** is a transformation process applied to arithmetic circuits that converts complex expressions into a sequence of simpler constraints, each involving at most one multiplication. This transformation preserves the semantic meaning of the original circuit while making it amenable to cryptographic protocols such as zero-knowledge proofs.

**A mathematical definition**

Let C be an arithmetic circuit over variables ${x1​,x2​,...,xn​}$. A **flattening** of C is a system of constraints $S={C1​,C2​,...,Cm​}$ such that:

1. Each constraint Ci is in one of the following forms:
    - $yi​=xj​⋅xk$​ (a single multiplication)
    - $yi​=xj​+xk​$ (a single addition)
    - $yi​=xj​$ (a direct assignment)
    - $yi​=constant$ (a constant assignment)
    
2. The set of variables in S includes all original variables ${x1​,x2​,...,xn​}$ plus auxiliary variables ${y1​,y2​,...,ym​}$ that represent intermediate results.

3. There exists a constraint or sequence of constraints in S whose output corresponds to the output of the original circuit C.

4. For any valid assignment to variables ${x1​,x2​,...,xn​}$ in C, there exists a unique extension to all variables in S that satisfies all constraints.

