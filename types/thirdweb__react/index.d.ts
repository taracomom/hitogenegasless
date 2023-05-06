declare module '@thirdweb/react' {
    export const ThirdwebProvider: React.FC<{ activeChain?: string }>;
    export const useThirdweb: () => {
      loading: boolean;
      error: Error | null;
      data: any;
    };
  }
  