const limit = (prefix, botName, ownerName) => {
        return `
γ *${botName}* γ

π *ππππ*
  π Prefix: γ  ${prefix}  γ
  π Creator: Nanammy
  π Version: 1.0
π *πππππ*
  β
  ββ π ${prefix}info
  ββ π ${prefix}blocklist
  ββ π ${prefix}chatlist
  ββ π ${prefix}ping
  ββ π ${prefix}bugreport
π *ππππππ*
  β
  ββ π ${prefix}limit
  ββ π ${prefix}bal
  ββ π ${prefix}buylimit
--------------------------------
Nota: VocΓͺ pode comprar um limite coletando dinheiro primeiro. Verifique seu dinheiro digitando o comando *${prefix}bal* , 1 preΓ§o limite = 1000 CASH.`
}
exports.limit = limit
