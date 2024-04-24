export abstract class HasherGenerator {
  abstract hash(plain: string): Promise<string>;
}

// SOLID

// Single Responsability
// Open-closed principle
// Linskov
// Interface Segregation **
// Dependency Inversion
