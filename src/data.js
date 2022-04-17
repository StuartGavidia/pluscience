export const data = {
    Chem: {
        info: [
            {
                unit: 11,
                img: "/Assets/images/chemistry-unit1.jpg",
                alt: "Molecule in a solution",
                name: "Intermolecular Forces",
                nameLink: "IntermolecularForces",
                bio: "The forces between molecules",
                practiceProblems: {
                    background: "You know that atoms are held together by chemical bonds, but did you know that molecules also are attracted to other molecules by a variety of forces? The attractive forces that exist between molecules are called intermolecular forces because they span from one molecule to another. We will use the intermolecular forces between molecules to understand why some are merely gases, others are liquids, and some are downright solid!  We'll apply what we know about intermolecular forces to understand the viscosity and surface tension of liquids. In the end of this chapter, we'll learn how to describe phase changes and use phase diagrams to keep track of which phase of matter each substance is in when pressure and temperature are taken into account.",
                    problemsList: [
                        {
                            problem: 1,
                            question: "List all the types of IMFs that occur in CH3CF3",
                            choices: ["Dispersion, Dipole-Dipole, Ion-Dipole", "Dispersion", "Dispersion, Dipole-Dipole", "Dipole-Dipole"],
                            correct: "Dispersion, Dipole-Dipole"
                        },
                        {
                            problem: 2,
                            question: "Which group of species can form hydrogen bonds in its pure form?",
                            choices: ["CH3OCH3", "KCl, CH3NH2", "C2H6, CH3CH2CH2OH", "CH3NH2, CH3CH2CH2OH"],
                            correct: "CH3NH2, CH3CH2CH2OH"
                        },
                        {
                            problem: 3,
                            question: "What is the name of the process from solid to gas?",
                            choices: ["Melting/Fusion", "Sublimation", "Deposition", "Condensation"],
                            correct: "Sublimation"
                        },
                    ],
                    conclusion: "Intermolecular forces is an important topic to understand. We can use this knowledge to explain the characteristics of molecules!"
                } 
            },
            {
                unit: 14,
                img: "/Assets/images/chemistry-unit3.jpg",
                alt: "Two beakers next to each other",
                name: "Kinetics",
                nameLink: "Kinetics",
                bio: "Some reactions are faster than others!",
                practiceProblems: {
                    background: "If you've ever had a bad headache and needed relief quickly, you may have crushed up a painkiller tablet and washed it down with a tasty beverage. Why does that seem to help? The reason is that the chemical reaction in your body happens more quickly when the reactants have a lot of surface area. Some reactions just naturally take a long time...as in millions of years (hear that shoutout to Geosciences?).  Some reactions are literally explosive. There is literally a science to this field, and we'll use it to figure out how quickly a reaction will happen based on things like concentration and temperature. ",
                    problemsList: [
                        {
                            problem: 1,
                            question: "Given the reaction F2(g) + 2ClO2(g) -> 2FClO2(g). What is the rate law for the reaction?",
                            choices: ["k[ClO2]^2", "k[ClO2][F2]", "k[ClO2]^2[F2]", "k[F2][ClO2]"],
                            correct: "k[F2][ClO2]"
                        },
                        {
                            problem: 2,
                            question: "If the reaction 2HI -> H2 + I2 is second order, which of the following will yield a linear plot?",
                            choices: ["log[HI] vs time", "[HI]^2 vs time", "ln[HI] vs time", "1/[HI] vs time"],
                            correct: "ln[HI] vs time"
                        },
                        {
                            problem: 3,
                            question: "For the reaction A + 3B -> 2C, how does the rate of disappearance of B compare to the rate of production of C?",
                            choices: ["the rate of disappearance of B is 1/2 the rate of appearance of C", "the rate of disappearance of B is 3/2 the rate of the appearance of C", "the rate of disappearance of B is 2/3 the rate of appearance of C", "the rate of disappearance of B is 1/3 the rate of appearance of C"],
                            correct: "the rate of disappearance of B is 3/2 the rate of the appearance of C"
                        },
                    ],
                    conclusion: "We can take into account the speed of a reaction based on conditions like concentration, temperature, and the state of the molecule."
                } 
            },
            {
                unit: 15,
                img: "/Assets/images/chemistry-unit2.jpg",
                alt: "Dropping reactant into a solution",
                name: "Chemical Equilibria",
                nameLink: "ChemicalEquilibria",
                bio: "Reactions that do not run all the way reach a balance!",
                practiceProblems: {
                    background: "Some reactions are like people in that they can't seem to figure out what they want:  to turn into products or to turn back into reactants. Chemists describe this chemical indecision as an equilibrium and have come up with mathematical constants that describe the extent that the reactions proceed in the forward direction. Equilibrium constants greater than 1 tell a chemist that the reaction prefers to form products and vice versa for equilibrium constants less than 1. By the end of this chapter, you'll be able to write algebraic expressions for equilibrium constants, even for reactions in which there are a mixture of different chemical phases present; to calculate the value of equilibrium constants, and to predict which way any reaction will proceed. When reactions aren't at equilibrium, they shift direction to eventually be at equilibrium according to Le Châtelier's Principle.",
                    problemsList: [
                        {
                            problem: 1,
                            question: "For the reaction 2CO(g) + O2(g) -> 2CO2(g), what is the equilibrium expression?",
                            choices: ["[CO2]^2 / [CO]^2[O2]", "[CO]^2[O2] / [CO2]^2", "[CO2] / [CO]^2[O2]", "[CO2]^2"],
                            correct: "[CO2]^2 / [CO]^2[O2]"
                        },
                        {
                            problem: 2,
                            question: "For the reaction SnO2(s) + 2CO(g) <-> Sn(s) + 2CO2(g) with CO2 = 2.0M and CO = 2.0M. Find K and determine whether the reaction favors products or reactants.",
                            choices: ["K = 2.0, products", "K = 1.0 products = reactants", "K = 4.0 products", "K = 0.5, reactants"],
                            correct: "K = 1.0 products = reactants"
                        },
                        {
                            problem: 3,
                            question: "For the reaction PCl5(g) <-> PCl3(g) + Cl2(g), predict what will happen when the reaction volume is decreased",
                            choices: ["the reaction will shift towards the reactants", "the reaction will shift towars the products", "the reaction will not be affected", "the reaction will go all the way towards the reactants until completion"],
                            correct: "the reaction will shift towards the reactants"
                        },
                    ],
                    conclusion: "A chemical reaction reaches equilibrium when the rate of the forward reaction is equal to the rate of the reverse reaction"
                }
            },
            {
                unit: 16,
                img: "/Assets/images/chemistry-unit4.png",
                alt: "Dropping reactant into a solution",
                name: "Acids and Bases",
                nameLink: "Acids&Bases",
                bio: "We will learn about pH!",
                practiceProblems: {
                    background: "Like the taste of fruits (or Sour Patch Kids)?  Take vitamin C when you're sick?  Congratulations!  You've been participating in acid-base chemical reactions all your life, from the foods you eat, to the amino acids that your body turns into proteins. In this chapter, you will learn the essential vocabulary and math of how chemists describe the reactions that acids and bases undergo.",
                    problemsList: [
                        {
                            problem: 1,
                            question: "What is the pH of a blood sample with a 7.2 x 10^-8 M of H+?",
                            choices: [0.015, 0.0013, 0.027, 0.0055],
                            correct: 0.0013
                        },
                        {
                            problem: 2,
                            question: "What is the pH of 0.2 M lithium acetate if the pKb is 9.3?",
                            choices: [2.0, 10.4, 3.7, 9.0],
                            correct: 9.0
                        },
                        {
                            problem: 3,
                            question: "What concentration of HOCl (Ka = 3.5 x 10^-8) has the same pH as that of 2.50 x 10^-4 M HNO3?",
                            choices: ["1.8 M", "6.8 x 10^-8 M", "3.93 M", "3.5 x 10^-2 M"],
                            correct: "1.8 M"
                        },
                    ],
                    conclusion: "We can use the molarity of protons and hydroxide ions to determine the acidity of a solution."
                }
            },
            {
                unit: 17,
                img: "/Assets/images/chemistry-unit5.png",
                alt: "Dropping reactant into a solution",
                name: "Buffers and Ksp",
                nameLink: "Buffers&Ksp",
                bio: "Buffers and the solubility product!",
                practiceProblems: {
                    background: "In this chapter, we'll build on our newfound knowledge of acid-base chemistry and apply it to three very important and related topics. First, much of the chemistry in your body is BUFFERED when weak acids are combined by their conjugate bases in solution. When both are present together, they buffer the solution so that large changes in pH don't occur as acid or base are added to the solution. In this way, your blood is able to absorb acid or base without throwing the pH of your blood outside its normal range (aka, you don't die by drinking something acidic like lemonade). Second, whenever acids are added to bases, an equivalent number of moles of base are neutralized. Chemists use TITRATIONS like this to determine the unknown concentration of either the acid or the base if they know the concentration and volume of the titrant (the solution being added) and the volume of the solution that is being titrated.  This is a helpful trick that chemists use to know how concentrated a solution is. Third, the concept of an equilibrium constant (K) is the basis for understanding the SOLUBILITY PRODUCT (Ksp), which allows chemists to calculate the concentration of even the most insoluble substances in water.",
                    problemsList: [
                        {
                            problem: 1,
                            question: "If it takes 54 mL of 0.1 M of NaOH to neutralize 125 mL of an HCL solution, what is the concentration of the HCL?",
                            choices: ["3.99 x 10^-3 M HCl", "4.32 x 10^-2 M HCl", "0.09M HCl", "9.32 x 10^-4 M HCl"],
                            correct: "4.32 x 10^-2 M HCl"
                        },
                        {
                            problem: 2,
                            question: "The solubility of magnesium hydroxide (Ksp = 8.0 x 10^-12) in a buffered solution of pH = 11.00 would be",
                            choices: ["1.0 x 10^-11 M", "8.0 x 10^10 M", "8.0 x 10^-12", "8.0 x 10^-6 M"],
                            correct: "8.0 x 10^-6 M"
                        },
                        {
                            problem: 3,
                            question: "A solution of 30mL of 0.1M NH3(aq) has 0.1M HCl added until it reaches an equivalence point. What pH will the solution be at this point?",
                            choices: [9.44, 3.63, 5.28, 2.11],
                            correct: 5.28
                        },
                    ],
                    conclusion: "Buffers stop acids and bases from drastically changing the pH of a solution!"
                }
            }

        ],

        description: "Welcome to Chemistry",
        img: "Assets/Images/chemistry.jpg",
        alt: "Vials used for Chemistry"
    }
}