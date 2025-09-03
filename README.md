# My Monorepo

A TypeScript monorepo containing utility packages and applications built with modern development tools.

## 📦 Published Packages

### [@muzzamilhassan/mathsss](./packages/math/README.md)
A lightweight mathematics utility package providing essential mathematical operations like addition and multiplication.

**Features:**
- Simple mathematical functions (`sum`, `multiply`)
- Full TypeScript support
- Lightweight and fast
- ES module support

**Installation:**
```bash
npm install @muzzamilhassan/mathsss
```

### [@muzzamilhassan/utilsss](./packages/utils/README.md)
A comprehensive utility library with 25+ helper functions for strings, numbers, arrays, objects, dates, promises, and validation.

**Features:**
- 25+ utility functions across multiple categories
- Full TypeScript support
- Optimized for performance
- Tree-shakeable design

**Installation:**
```bash
npm install @muzzamilhassan/utilsss
```

## 🏗️ Project Structure

```
my-monorepo/
├── apps/
│   └── demo/                 # Demo application
├── packages/
│   ├── math/                 # @muzzamilhassan/mathsss package
│   ├── utils/                # @muzzamilhassan/utilsss package
│   └── hooks/                # React hooks package (in development)
├── package.json              # Root package configuration
├── pnpm-workspace.yaml       # PNPM workspace configuration
└── turbo.json                # Turborepo configuration
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- PNPM (recommended) or npm/yarn

### Installation
```bash
# Clone the repository
git clone <your-repo-url>
cd my-monorepo

# Install dependencies
pnpm install

# Build all packages
pnpm build

# Run demo app
cd apps/demo
pnpm dev
```

## 🛠️ Development

### Available Scripts

**Root level:**
```bash
pnpm build          # Build all packages
pnpm dev            # Start development mode
pnpm test           # Run tests across all packages
pnpm lint           # Lint all packages
pnpm clean          # Clean build artifacts
```

**Package level:**
```bash
pnpm build          # Build specific package
pnpm dev            # Start package in development mode
```

### Adding New Packages
1. Create a new directory in `packages/`
2. Initialize with `package.json`
3. Add to `pnpm-workspace.yaml`
4. Configure build scripts

## 📚 Documentation

- [Math Package Documentation](./packages/math/README.md)
- [Utils Package Documentation](./packages/utils/README.md)
- [Demo App](./apps/demo/)

## 🤝 Contributing

We welcome contributions! Please see individual package READMEs for specific contribution guidelines.

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the ISC License - see individual package READMEs for details.

## 📞 Support

For questions or support:
- Open an issue on the GitHub repository
- Check individual package documentation
- Review the demo application for usage examples

---

**Built with ❤️ by Muzzamil Hassan**
