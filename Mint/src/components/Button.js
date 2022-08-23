export default function Button({ str, walletAddress }) {
    return (
      <button>
        {walletAddress.length > 0 ? (
            `${str} Connected: ` +
            String(walletAddress).substring(0, 6) +
            "..." +
            String(walletAddress).substring(38)
          ) : (
            <span>Connect {str}</span>
          )}
      </button>
    )
}